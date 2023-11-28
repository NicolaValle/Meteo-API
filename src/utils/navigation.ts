export const makePath = (...pathSlices: string[]): string => {
    const path = pathSlices.reduce(
      (constructedPath, slice) => `${constructedPath}${slice}`,
      ''
    );
    return path;
  };