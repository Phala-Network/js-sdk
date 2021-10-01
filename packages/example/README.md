# Phala JS SDK Example

## Environment Variables

> **Note**: This step is **necessary** because backend services are required.

You can use environment variables to set prpc base url and ws provider endpoint:

```bash
cp .env .env.local
```

Then edit `.env.local`, for example:

```plain
NEXT_PUBLIC_BASE_URL=http://0.0.0.0:8001
NEXT_PUBLIC_WS_ENDPOINT=ws://0.0.0.0:19944
```

## Getting Started

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).
