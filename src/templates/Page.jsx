import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
import { blockRendererComponent } from "../config/blockRendererComponent";
import { PageLayout } from "../components/layouts";
// import HomePage from "../pages";
import { Hero } from "../components/organisms/Hero";

const Page = (props) => {
  const { title, blocks, isFrontPage } = props.pageContext

  return (
      isFrontPage ? (
        <Hero />
      ) : (
        <PageLayout title={title} className="overflow-y-auto xl:pb-48">
          <BlockRendererProvider 
            allBlocks={blocks} 
            renderComponent={blockRendererComponent}
          />
        </PageLayout>
      )
  )
}

export default Page;