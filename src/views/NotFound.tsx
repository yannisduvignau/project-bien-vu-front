import { memo } from "react";

const NotFound = memo(() => {
  return <div className="flex justify-center items-center h-screen w-screen">
  <img src="/img/Logo_error404.png" alt="Page non trouvée" className="w-1/2 h-auto p-25" />
</div>;
});

export default NotFound;