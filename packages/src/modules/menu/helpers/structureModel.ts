const structureModel = (
  role?: string,
  ariaHasPopup?: boolean,
  ariaExpanded?: boolean,
  event?: any,
  isOpen?: boolean,
) => {
  const roleApi = role ? role : 'button';
  const ariaHasPopupApi = ariaHasPopup ? ariaHasPopup : true;
  const ariaExpandedApi = ariaExpanded ? ariaExpanded : false;
  const eventApi = event ? event : null;
  const isOpenApi = isOpen ? isOpen : false;

  return {
    attrs: {
      role: roleApi,
      ariaHasPopup: ariaHasPopupApi,
      ariaExpanded: ariaExpandedApi,
    },
    on: { ['click']: eventApi },
    value: isOpenApi,
  };
};

export default structureModel;
