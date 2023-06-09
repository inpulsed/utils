import { useState } from 'react';
import copy from 'copy-to-clipboard';

function useCopyToClipboard() {
  const [value, setValue] = useState();
  const [success, setSuccess] = useState();

  const copyHandler = (text, options) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };

  return [copyHandler, { value, success }];
}

export default useCopyToClipboard;
