export const BOOKING_URL = "https://calendly.com/jp305/30min";
export const EMAIL_HREF = "mailto:jp@jp305.dev";

/** The CV is prerendered per locale; a plain <a> keeps it out of the router. */
export const cvHref = (locale: string) => `/${locale}/cv.pdf`;
