import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";

type EventRouteParams = {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * GET /api/events/[slug]
 * Returns a single event by its slug.
 */
export async function GET(
  _request: NextRequest,
  { params }: EventRouteParams,
): Promise<NextResponse> {
  try {
    await connectDB();

    const { slug } = await params;

    if (!slug || typeof slug !== "string" || !slug.trim()) {
      return NextResponse.json(
        { message: "Invalid or missing event slug." },
        { status: 400 },
      );
    }

    const sanitizedSlug = slug.trim().toLowerCase();
    const event = await Event.findOne({ slug: sanitizedSlug }).lean();

    if (!event) {
      return NextResponse.json(
        { message: `Event not found for slug '${sanitizedSlug}'.` },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Event fetched successfully", event },
      { status: 200 },
    );
  } catch (error) {
    // log error for debugging (only for development)
    if (process.env.NODE_ENV === "development") {
      console.error("Error fetching event:", error);
    }

    // handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('MONGODB_URI')) {
        return NextResponse.json(
          { message: "Database configuration error" },
          { status: 500 },
        );
      }

      return NextResponse.json(
        { message: "Failed to fetch event.", error: error.message },
        { status: 500 },
      );
    }

    // handle unknown errors
    return NextResponse.json(
      { message: 'An unknown error occurred.'},
      { status: 500 },
    );
  }
}
