import classNames from 'classnames';

export const createBemBlockBuilder = blocks => {
  const cleanedBlocks = blocks.reduce(
    (reviewedBlocks, block) =>
      block ? reviewedBlocks.concat(block.trim().split(' ')) : reviewedBlocks,
    [],
  );

  return (elementOrModifier = '') =>
    cleanedBlocks.reduce(
      (classList, block) => classNames(classList, `${block}${elementOrModifier}`),
      '',
    );
};
