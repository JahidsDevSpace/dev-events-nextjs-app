<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent App. The following changes were made:

- **`instrumentation-client.ts`** (new): Initializes PostHog client-side using the Next.js 15.3+ `instrumentation-client.ts` pattern. Configured with a reverse-proxy `api_host`, exception capture enabled, and debug mode in development.
- **`next.config.ts`** (updated): Added reverse-proxy rewrites (`/ingest/*` → PostHog ingestion endpoints) and `skipTrailingSlashRedirect: true` to support PostHog's trailing-slash API requests.
- **`.env.local`** (created): Stores `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` as environment variables. Covered by `.gitignore`.
- **`components/ExploreBtn.tsx`** (updated): Added `posthog.capture("explore_events_clicked")` inside the existing `onClick` handler.
- **`components/EventCard.tsx`** (updated): Added `'use client'` directive and `posthog.capture("event_card_clicked", { event_title, event_slug, event_location, event_date })` on the Link's `onClick` to track which events users click on with rich context.

| Event | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" CTA button on the home page hero section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card; captures event title, slug, location, and date | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/381699/dashboard/1465185
- **Explore Events button clicks** (daily trend): https://us.posthog.com/project/381699/insights/NDadupP1
- **Event card clicks over time** (daily trend): https://us.posthog.com/project/381699/insights/CWt6wpdl
- **Discovery to click conversion funnel** (Explore → card click): https://us.posthog.com/project/381699/insights/SSnBOXVH
- **Most popular events by clicks** (bar chart broken down by event title): https://us.posthog.com/project/381699/insights/4BWKWOoQ
- **Unique visitors who clicked an event** (bold number summary): https://us.posthog.com/project/381699/insights/08uGwWOl

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
