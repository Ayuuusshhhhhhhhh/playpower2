# Production-scale vacation-rental marketplace

Users → DNS/Edge → CDN/WAF → React/Next.js frontend → API Gateway/Load Balancer → horizontally scaled application services (Listings, Search, Booking, Auth, Payments, Notifications).

Data layer: PostgreSQL primary + read replicas; Redis for caching/sessions/rate limits; object storage + CDN for photos; OpenSearch/Elasticsearch for search/filtering; Kafka/SQS-style event queue for asynchronous indexing, notifications, analytics and workers.

Deployment: containerized services on Kubernetes/ECS with autoscaling, CI/CD, observability (logs, metrics, traces, alerts), TLS and secret management.
