export const request = () => {
  
  const get = async (url) => {
    const result = await fetch(url);
    return result.json();
  };

  return {get}
}


