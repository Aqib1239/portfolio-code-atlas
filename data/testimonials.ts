/**
 * Testimonials.
 *
 * ⚠️  PLACEHOLDER DATA — these are NOT real reviews.
 *
 * No genuine testimonials were provided, so the entries below are clearly
 * marked templates. Each is flagged `placeholder: true`, which makes the UI
 * render a visible "Sample" badge and a notice, so nothing here can be mistaken
 * for a real endorsement.
 *
 * TO USE REAL ONES: replace the fields with actual quotes from colleagues,
 * managers or clients, and set `placeholder: false` (or remove the flag). Once
 * every entry is real, the sample notice in the section disappears automatically.
 */

export type Testimonial = {
  id: string;
  /** Name of the person giving the testimonial. */
  name: string;
  /** Their job title / role. */
  role: string;
  /** How they know Aqib (e.g. "Manager", "Teammate", "Client"). */
  // relationship: string;
  /** Their company or organization. */
  company: string;
  /** The testimonial text. */
  review: string;
  /** Marks the entry as sample data. Set to false once it's a real quote. */
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Nawaz Shareef Shaik",
    role: "Manager",
    // relationship: "Manager",
    company: "Yatiken Software Solutions",
    review:
      "Aqib is a dedicated MERN developer with strong problem-solving skills. He contributed significantly to our projects like ShipDuniya and PrintNParcel.",
    placeholder: true,
  },
  {
    id: "t2",
    name: "Ram Chandel",
    role: "Teammate",
    // relationship: "",
    company: "Yatiken Software Solutions",
    review:
      "Working with Aqib was a great experience. He is collaborative, quick to learn, and always focused on delivering quality work.",
    placeholder: true,
  },
  {
    id: "t3",
    name: "Sarvesh Srivastava",
    role: "Trainer",
    // relationship: "Client",
    company: "QSpider",
    review:
      "During his MERN stack training, Aqib showed excellent grasp of concepts and built real-world projects with enthusiasm.",
    placeholder: true,
  },
];

/** True while any testimonial is still sample data. Drives the section notice. */
export const hasPlaceholderTestimonials = testimonials.some((t) => t.placeholder);
