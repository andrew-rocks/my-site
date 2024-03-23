import React from "react";
import CardWrapper from "./common/cardWrapper";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import TitleList from "./common/titleList";
import MediaDialog from "./common/mediaDialog";
import LinkButton from "./common/linkButton";

type ProjectProps = {
  title: string;
  description: string[];
  utilized: string[];
  image: IGatsbyImageData | null;
  repoLink?: string;
  mediaLinks?: string[] | null;
  // dialogImages?: (IGatsbyImageData | null)[] | null;
};

const Project = ({
  title,
  description,
  utilized,
  image,
  repoLink,
  mediaLinks, // dialogImages,
}: ProjectProps) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <CardWrapper flex>
      <div className="flex w-full flex-row justify-between">
        <div
          id="content"
          className="mr-5 flex h-full w-2/3 flex-col justify-between"
        >
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <ul className="list-disc pl-4 pt-1">
              {description.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div>
            {utilized && (
              <div className="pb-3">
                <TitleList
                  title="Utilized"
                  list={utilized.filter(
                    (item): item is string => item !== null,
                  )}
                  emphasis
                />
              </div>
            )}
            {repoLink && (
              <LinkButton text="View Repo" link={repoLink} openInNewTab />
            )}
            {mediaLinks && (
              <LinkButton text="Check it out" openDialog={handleOpenDialog} />
            )}
          </div>
        </div>
        <div
          id="image"
          className="flex w-1/3 items-center justify-center"
          data-atropos-offset="6"
        >
          {image && (
            <GatsbyImage
              className="overflow-hidden rounded-xl drop-shadow-lg"
              image={image}
              alt={`${title} - image`}
            />
          )}
        </div>
      </div>
      {mediaLinks && (
        <MediaDialog
          dialogOpen={dialogOpen}
          handleCloseDialog={handleCloseDialog}
          mediaLinks={mediaLinks}
        />
      )}
    </CardWrapper>
  );
};

export default Project;
