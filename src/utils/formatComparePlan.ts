import { ComparePlansQuery } from '@app/utils/types';

export type FormattedComparePlansDto = ReturnType<typeof formatComparePlans>;
export type FormattedComparePlansItemDto = FormattedComparePlansDto['sections'][0]['items'][0];

export const formatComparePlans = (dto: ComparePlansQuery) => {
  const [plan] = dto.allContentfulComparePlan.nodes;

  return {
    ...plan,
    columns: JSON.parse(plan.columns) as string[],
    mobileColumns: JSON.parse(plan.mobileColumns) as string[],
    sections: plan.sections.map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        plans: JSON.parse(item.plans) as (string | number | boolean)[],
      })),
    })),
  };
};
