import React from "react";

const PinkButton = React.forwardRef((props, ref) => {
  return (
    <button
      className="flex items-center border rounded-lg px-[10px] py-[6px] bg-pink-400 border-black hover:bg-pink-300 font-semibold"
      ref={ref}
      {...props}
    />
  );
});

PinkButton.displayName = 'PinkButton';
export default PinkButton;
