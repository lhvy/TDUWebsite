# Install dependencies only when needed
FROM node:lts AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN yarn global add @keystone-next/keystone
RUN yarn install

# Production image, copy all the files and run next
FROM node:lts AS runner
ENV NODE_ENV production

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder ./public ./public
COPY --from=builder  /.next ./.next
COPY --from=builder ./.keystone ./.keystone
COPY --from=builder ./node_modules ./node_modules
COPY --from=builder ./package.json ./package.json

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
