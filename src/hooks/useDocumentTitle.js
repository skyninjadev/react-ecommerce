import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'skyninjadev - eCommerce React App';
    }
  }, [title]);
};

export default useDocumentTitle;
