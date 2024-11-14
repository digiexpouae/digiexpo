import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import TeamDetailsArea from "./team-details-area";
import FooterFour from "@/layout/footers/footer-4";
import StickyIcons from "@/common/sticky-icons";
import StickyButtons from "@/common/sticky-buttons";
import BreadcrumbTwoCopy from "@/common/breadcrumbs/breadcrumb-2-copy";

const TeamDetails = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <StickyIcons />
            <StickyButtons />
            <BreadcrumbTwoCopy title="Privacy Policy" />
            <TeamDetailsArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
