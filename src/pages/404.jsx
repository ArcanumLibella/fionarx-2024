import * as React from "react"
import { Link } from "gatsby"
import { Text } from "../components/atoms/Text"
import { Blobs } from "../components/organisms/Blobs"
import { BlobsLight } from "../components/organisms/BlobsLight/BlobsLight"

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// TODO: Style à revoir !
const NotFoundPage = () => {
  return (
    // TODO: Créer un layout spécial pour la 404
      <div className="relative px-4 pt-40 md:pt-56 md:px-8 md:ml-20 xl:ml-0 xl:py-0 pb-16 xl:px-0 xl:top-1/4 xl:-right-1/3 3xl:-right-2/5 max-w-fit">
        <Blobs className="fixed flex justify-center items-center -top-1/5 -right-1/10 xl:right-auto xl:top-auto xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[36vh] xl:w-[48vw] xl:h-[54vh] 2xl:w-[40vw] 2xl:h-[64vh]" />
        <BlobsLight className="hidden fixed xl:flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] xl:w-[48vw] xl:h-[54vh] 2xl:w-[40vw] 2xl:h-[72vh]" />
        <div className="max-w-800 2xl:max-w-5xl">
          <Text type="h2">Oups !</Text>
          <Text type="h4" className="text-white">
            Il semble que vous vous soyez égaré(e) ! 👀
            <br />
            {process.env.NODE_ENV === "development" ? (
              <>
                <br />
                Try creating a page in <code style={codeStyles}>src/pages/</code>.
                <br />
              </>
            ) : null}
            <br />
            <Link to="/">Go home</Link>.
          </Text>
        </div>
      </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
