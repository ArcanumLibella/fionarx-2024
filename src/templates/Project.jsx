import { graphql } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Text } from "../components/atoms/Text";
// import { Tag } from "../components/atoms/Tag";
import { Blobs } from "../components/organisms/Blobs";
import { LinkButton } from "../components/molecules/LinkButton";
// import { ExternalLinkButton } from "../components/molecules/ExternalLinkButton";

const ProjectPage = () => {
  // const image1 = getImage(data.mdx.frontmatter.image1);
  // const image2 = getImage(data.mdx.frontmatter.image2);
  // const image3 = getImage(data.mdx.frontmatter.image3);

  return (
    <div className="flex flex-col justify-between overflow-hidden xl:flex-row md:ml-20 xl:h-screen">
      {/* SLIDER */}
      {/* FIXME: GatsbyImage must have height 100% */}
      {/* <div className="overflow-hidden h-[60vh] xl:max-h-screen xl:h-screen"> */}
      <GatsbyImage
        image={image1}
        alt="Project's preview"
        imgClassName="h-full"
      />
      {/* </div> */}
      <div className="relative flex flex-col-reverse w-full xl:h-screen p-5 pb-10 md:p-10 xl:min-w-[520px] xl:max-w-[35%]">
        <LinkButton
          label="Back"
          side="left"
          path="/projects"
          className="absolute top-10"
        />
        <Blobs className="hidden fixed xl:flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] xl:w-[40vw] xl:h-[48vh] 2xl:w-[35vw] 2xl:h-[44vh] z-0" />
        <div className="pt-16 md:pt-12 xl:pt-0">
          {/* TITLE */}
          <Text type="secondTitle" className="mb-4">
            Le Réflexologue
          </Text>

          <div className="justify-between mb-10 md:flex">
            {/* TAGS */}
            <div className="flex flex-wrap items-start w-full gap-2 mb-8 md:mb-0 md:gap-4">
              {/* TODO: À dynamiser */}
              {/* <Tag key={tag} label={tag} /> */}
            </div>
            {/* EXTERNAL LINKS */}
            <div className="flex gap-6">
              {/* TODO: À dynamiser */}
              {/* <ExternalLinkButton
                label="Design"
                side="right"
                path="link"
                className="text-white"
              />
              <ExternalLinkButton
                label="Site"
                side="right"
                path="link"
                className="text-white"
              /> */}
            </div>
          </div>

          {/* DESCRIPTION */}
          {/* TODO: À dynamiser */}
          <Text type="paragraph" className="mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus condimentum elementum mauris. Ipsum neque est nibh sed in enim. Blandit viverra mauris, dolor leo senectus diam eleifend augue.
            Duis scelerisque ultricies turpis ac mi sagittis pellentesque nisl fames. Quisque congue lacus aliquet aliquam.
            Pellentesque nisl volutpat bibendum cursus. Bibendum iaculis adipiscing duis placerat id turpis justo in interdum amet eget accumsan, mattis neque enim porttitor purus. 
          </Text>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <Text
                type="custom"
                className="mr-6 text-base font-bold uppercase font-body text-purple-light lg:text-xbase"
              >
                EXPERTISE
              </Text>
              <div /* className="mt-0.5 md:mt-1.5 2xl:mt-0.5" */>
                {/* TODO: À dynamiser */}
                <Text type="paragraphLight" className="capitalize">
                  Branding
                </Text>
              </div>
            </div>
            <div className="flex flex-col">
              <Text type="custom" className="mr-6 font-bold uppercase mr-6text-base font-body text-purple-light lg:text-xbase">
                ANNÉE
              </Text>
              <div /* className="mt-0.5 md:mt-1.5 2xl:mt-0.5" */>
                {/* TODO: À dynamiser */}
                <Text type="paragraphLight">
                  2022
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const GetPostData = graphql`
//   query ($id: String) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//         tags
//         roles
//         linkSite
//         linkFigma
//         date
//         image1 {
//           childImageSharp {
//             gatsbyImageData(placeholder: BLURRED)
//           }
//         }
//         image2 {
//           childImageSharp {
//             gatsbyImageData(placeholder: BLURRED)
//           }
//         }
//         image3 {
//           childImageSharp {
//             gatsbyImageData(placeholder: BLURRED)
//           }
//         }
//       }
//       body
//     }
//   }
// `;

export default ProjectPage;
