import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
import { blockRendererComponent } from "../config/blockRendererComponent";
import { Link } from "gatsby";
import { ProjectLayout } from "../components/layouts";

const ProjectPage = (props) => {
  const { title, blocks, projectDetails } = props.pageContext

  return (
    <ProjectLayout
      title={title}
      projectDetails={projectDetails}
    >
      <BlockRendererProvider 
        allBlocks={blocks} 
        renderComponent={blockRendererComponent}
        siteDomain={process.env.GATSBY_WP_URL}
        customInternalLinkComponent={({children, internalHref, className}, index) => 
          <Link key={index} to={internalHref} className={className}>{children}</Link>
        }
      />
    </ProjectLayout>
  );
};

export default ProjectPage;
