import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Video from "./video";
import Carousel from "react-material-ui-carousel";

interface MediaDialogProps {
  dialogOpen: boolean;
  handleCloseDialog: () => void;
  mediaLinks: string[];
}

const MediaDialog: React.FC<MediaDialogProps> = ({
  dialogOpen,
  handleCloseDialog,
  mediaLinks,
}) => {
  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={dialogOpen}
      onClose={handleCloseDialog}
    >
      <Carousel animation="slide" navButtonsAlwaysVisible autoPlay={false}>
        {mediaLinks.map((mediaLink) => (
          <Video key={mediaLink} src={mediaLink} />
        ))}
      </Carousel>
    </Dialog>
  );
};

export default MediaDialog;
