"use client";
import React from "react";
import styles from "./Tracker.module.scss";
import EnterBlock from "../components/EnterBlock/EnterBlock";
import useFormattedTranslation from "../utils/hooks/useFormattedTranslation";
import Banner from "@/app/[locale]/images/tracker-enter.png";
import ShowcaseBlock, {
  Block,
} from "../components/ShowcaseBlock/ShowcaseBlock";
import ShowcasePhoto1 from "@/app/[locale]/images/showcase-tracker-1.png";
import ShowcasePhoto2 from "@/app/[locale]/images/showcase-tracker-3.png";
import ShowcasePhoto3 from "@/app/[locale]/images/showcase-tracker-5.png";
import ShowcasePhoto4 from "@/app/[locale]/images/showcase-tracker-2.png";
import ShowcasePhoto5 from "@/app/[locale]/images/showcase-tracker-4.png";
import ProblemsWeSolveBlock, {
  BlockSolve,
} from "../components/ProblemsWeSolveBlock/ProblemsWeSolveBlock";
import QualityIcon from "@/app/[locale]/images/qIcon.jpg";
import ComplexIcon from "@/app/[locale]/images/cIcon.png";
import AIcon from "@/app/[locale]/images/AIcon.png";
import TaskOfProjectBlock from "../components/TaskOfProjectBlock/TaskOfProjectBlock";
import TaskOfProjectBanner from "@/app/[locale]/images/task-of-the-project-banner-tracker.png";
import RealizitaionBanner from "@/app/[locale]/images/realization-tracker.png";
import FreeForAllBanner from "@/app/[locale]/images/freeForAll-banner-tracker.png";

import WhyUsBlock from "../components/WhyUsBlock/WhyUsBlock";
import Conclusion from "../components/conclusion/Conclusion";
import ConclusionBanner from "@/app/[locale]/images/conslusion-tracker-banner.png";
import MoreProjects from "../components/MoreProjects/MoreProjects";
import FreeForAllBlock from "../components/FreeForAllBlock/FreeForAllBlock";
import ResultOfWork from "../components/ResultOfWork/ResultOfWork";

const Tracker = () => {
  const { t, rich } = useFormattedTranslation("tracker");
  const blocks: Block[] = [
    {
      img: ShowcasePhoto1,
      title: t("showcase_block_title_1"),
      text: t("showcase_block_text_1"),
    },

    {
      img: ShowcasePhoto2,
      title: t("showcase_block_title_3"),
      text: t("showcase_block_text_3"),
    },
    {
      img: ShowcasePhoto3,
      title: t("showcase_block_title_5"),
      text: t("showcase_block_text_5"),
    },
    {
      img: ShowcasePhoto4,
      title: t("showcase_block_title_2"),
      text: t("showcase_block_text_2"),
    },
    {
      img: ShowcasePhoto5,
      title: t("showcase_block_title_4"),
      text: t("showcase_block_text_4"),
    },
  ];
  const problemsWeSolveBlocks: BlockSolve[] = [
    {
      icon: QualityIcon,
      title: t("problems_we_solve_block_title_1"),
      text: t("problems_we_solve_block_text_1"),
    },
    {
      icon: AIcon,
      title: t("problems_we_solve_block_title_2"),
      text: t("problems_we_solve_block_text_2"),
    },
    {
      icon: ComplexIcon,
      title: t("problems_we_solve_block_title_3"),
      text: t("problems_we_solve_block_text_3"),
    },
    {
      icon: ComplexIcon,
      title: t("problems_we_solve_block_title_4"),
      text: t("problems_we_solve_block_text_4"),
    },
  ];
  const aspectsBlocks = [
    {
      title: t("aspect_block_title_1"),
      desc: t("aspect_block_text_1"),
    },
    {
      title: t("aspect_block_title_2"),
      desc: t("aspect_block_text_2"),
    },
    {
      title: t("aspect_block_title_3"),
      desc: t("aspect_block_text_3"),
    },
    {
      title: t("aspect_block_title_4"),
      desc: t("aspect_block_text_4"),
    },
  ];
  return (
    <>
      <div className="conteiner">
        <div className={styles.wrapper}>
          <EnterBlock
            text={rich("text_enter")}
            image={Banner}
            smallText="Mobile App"
            title="Ninja Water Tracker"
            appStoreUrl="google.com"
            googlePlayUrl="google.com"
            isExlusive
          />
        </div>
      </div>
      <ShowcaseBlock title={rich("showcase_title")} blocks={blocks} />
      <ProblemsWeSolveBlock
        title={rich("problems_we_solve_title")}
        text={rich("problems_we_solve_text")}
        blocks={problemsWeSolveBlocks}
      />
      <TaskOfProjectBlock
        title={t("task_of_the_project_title")}
        tasks={[
          t("task_of_the_project_1"),
          t("task_of_the_project_2"),
          t("task_of_the_project_3"),
        ]}
        image={TaskOfProjectBanner}
        isReversed
      />

      <TaskOfProjectBlock
        title={rich("implementation_block_title")}
        tasks={[
          t("implementation_block_task_1"),
          t("implementation_block_task_2"),
          t("implementation_block_task_3"),
          t("implementation_block_task_4"),
          t("implementation_block_task_5"),
        ]}
        image={RealizitaionBanner}
      />
      <FreeForAllBlock
        text={t("free_for_all_text")}
        title={rich("free_for_all_title")}
        banner={FreeForAllBanner}
      />
      <ResultOfWork
        title={rich("reviews_title")}
        tasks={[
          rich("reviews_text_1"),
          rich("reviews_text_2"),
          rich("reviews_text_3"),
        ]}
        image={RealizitaionBanner}
      />
      <WhyUsBlock
        title={rich("aspects_title")}
        text={t("aspects_text")}
        blocks={aspectsBlocks}
      />
      <Conclusion
        title={t("conclusion_title")}
        text={rich("conclusion_text")}
        evaluations={rich("conclusion_rated")}
        img={ConclusionBanner}
      />
      <MoreProjects />
    </>
  );
};

export default Tracker;
