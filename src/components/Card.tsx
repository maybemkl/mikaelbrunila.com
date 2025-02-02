import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"] & { image?: string }; // Add `image` here
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, image, journal } = frontmatter; // Destructure journal

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6 flex items-start space-x-4">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-48 h-48 object-cover rounded-lg shadow-sm"
        />
      )}
      <div>
        <a
          href={href}
          className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        >
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}
        </a>
        <p className="text-sm text-gray-500 italic">{journal}</p> {/* Display the journal */}
        <Datetime
          pubDatetime={pubDatetime}
          modDatetime={modDatetime}
          format={frontmatter.format || "full"}
        />
        <p>{description}</p>
      </div>
    </li>
  );
}

