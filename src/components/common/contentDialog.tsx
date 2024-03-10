import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Video from "./video";

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
      <DialogContent className="flex items-center justify-center">
        {mediaLinks.map((mediaLink) => (
          <Video key={mediaLink} src={mediaLink} />
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default MediaDialog;
