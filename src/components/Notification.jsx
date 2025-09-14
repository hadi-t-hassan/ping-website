import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-color-1 to-color-2 rounded-xl flex items-center justify-center">
        <span className="text-n-1 font-bold text-xl">P</span>
      </div>

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title || "Project Completed"}</h6>
        <p className="body-2 text-n-3 mb-2">Website development finished successfully</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-color-1 rounded-full animate-pulse"></div>
            <span className="body-2 text-n-3">Live now</span>
          </div>
          <div className="body-2 text-n-13">2h ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
