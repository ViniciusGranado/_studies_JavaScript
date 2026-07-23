#
# Build
#

FROM node:24.18.0 as build
WORKDIR /app
COPY . .

#
# Production
#
FROM node:24.18.0-alpine as production
WORKDIR /app
COPY --from=build /app/index.js /app/index.js
CMD ["node", "index.js"]