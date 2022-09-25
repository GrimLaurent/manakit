const formatColorToRgba = (hex: string, opacity?: string | number) => {
  const valOpacity = opacity ? opacity : 1;
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + valOpacity + ')';
};

export default formatColorToRgba;
