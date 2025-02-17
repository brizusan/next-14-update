import Image from "next/image";
import React from "react";

export const Profile = () => {
  return (
    <div className="mt-8 text-center">
      {/* Next/Image */}
      <Image
        width={100}
        height={100}
        src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
        alt=""
        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
      />
      <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
        Cynthia J. Watts
      </h5>
      <span className="hidden text-gray-400 lg:block">Admin</span>
    </div>
  );
};
