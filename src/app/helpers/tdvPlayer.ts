export const loadScript = (url: string): Promise<HTMLScriptElement> => {
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);

    script.onload = () => resolve(script);
  });
};
