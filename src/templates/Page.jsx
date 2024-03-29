import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
import { blockRendererComponent } from "../config/blockRendererComponent";
import { PageLayout } from "../components/layouts";
import { Link } from "gatsby";

const Page = (props) => {
  const { title, blocks } = props.pageContext
  console.log(props)

  return (
    <PageLayout title={title} className="overflow-y-auto xl:pb-96 2xl:pb-[36rem]">
      <BlockRendererProvider 
        allBlocks={blocks} 
        renderComponent={blockRendererComponent}
        siteDomain={process.env.GATSBY_WP_URL}
        customInternalLinkComponent={({children, internalHref, className}, index) => 
          <Link key={index} to={internalHref} className={className}>{children}</Link>
        }
      />
    </PageLayout>
  )
}

export default Page;