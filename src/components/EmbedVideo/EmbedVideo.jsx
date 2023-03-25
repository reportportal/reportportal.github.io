import React from 'react';
import { Modal } from 'antd';

import './EmbedVideo.scss';

export const EmbedVideo = ({ isOpen, embedId, onClick }) => {
  return (
    <Modal
      className="video-responsive"
      width="100%"
      open={isOpen}
      destroyOnClose
      footer={null}
      closable={false}
      onCancel={onClick}
      maskStyle={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Modal>
  );
};
