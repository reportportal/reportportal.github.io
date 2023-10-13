import classNames from 'classnames';

export const createBemBlockBuilder = (blocks: string[]) => {
  const cleanedBlocks = blocks.reduce(
    (reviewedBlocks, block) =>
      block ? reviewedBlocks.concat(block.trim().split(' ') as unknown as  ConcatArray<never>) : reviewedBlocks,
    [],
  );

  return (elementOrModifier = '') =>
    cleanedBlocks.reduce(
      (classList, block) => classNames(classList, `${block}${elementOrModifier}`),
      '',
    );
};
