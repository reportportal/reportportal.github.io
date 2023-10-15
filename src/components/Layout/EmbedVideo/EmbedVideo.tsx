import React from 'react';
import { Modal } from 'antd';

import './EmbedVideo.scss';

interface Props {
  isOpen: boolean
  embedId: string
  onClick: () => void
}

export const EmbedVideo: React.FC<Props> = ({ isOpen, embedId, onClick }) => {
  return (
    <Modal
      className="video-responsive"
      width="100%"
      open={isOpen}
      destroyOnClose
      footer={null}
      closable={false}
      onCancel={onClick}
      maskStyle={{ backgroundColor: 'rgba(47, 60, 95, 0.5)', backdropFilter: 'blur(8px)' }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Modal>
  );
};
