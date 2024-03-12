import React from "react";
import { Separator } from "../components/atoms/Separator";
import { Text } from "../components/atoms/Text";
import { PageLayout } from "../components/layouts/PageLayout";

const DesignSystemPage = () => {
  return (
    <PageLayout title="Design System" className="overflow-y-auto xl:pb-96 2xl:pb-[36rem]">
      <Text type="h3" className="text-purple-light">
        Typography
      </Text>
      <Separator />
      <Text type="h1" className="mb-8">
        Heading 1
      </Text>
      <Text type="h2" className="mb-8 text-white">
        Heading 2
      </Text>
      <Text type="h3" className="mb-8">
        Heading 3
      </Text>
      <Text type="h4" className="mb-8 text-white">
        Heading 4.
      </Text>
      <Text type="h5" className="mb-8 text-white">
        Heading 5
      </Text>
      <Text type="paragraphXL" className="mb-8 text-white">
        Paragraph Extra-Large
      </Text>
      <Text type="paragraphLarge" className="mb-8 text-white">
        Paragraph Large
      </Text>
      <Text type="paragraph" className="mb-8 text-white">
        Paragraph
      </Text>
      <Text type="paragraphLight" className="mb-8 text-white">
        ParagraphLight
      </Text>
      <Separator />
    </PageLayout>
  );
};

export default DesignSystemPage;
