import React from "react";
import MyCatalog from "../../modules/catalog/mycatalog";

type Props = {
  selectedCategoryName: string;
  onOpenCatalog?: () => void;
  onSelectCatalogItem: (element: any, categoryName: string) => void;
  onOpenDefaultAsset?: () => void;
  title: string;
  TabSwitchComponent?: any;
  containerClassName?: string;
  titleClassName?: string;
  categoryContainerClassName?: string;
  elementClassName?: string;
  selectedElementClassName?: string;
  imageContainerClassName?: string;
  elementInfoTitleClassName?: string;
};

const CategoryImageWidth: Record<string, any> = {
  wall: "45",
  desk: "50",
  door: "40",
  tree: "40",
  window: "45",
};

const Category: React.FC<Props> = ({
  onSelectCatalogItem,
  selectedCategoryName,
  title,
  TabSwitchComponent,
  containerClassName,
  titleClassName,
  categoryContainerClassName,
  elementClassName,
  selectedElementClassName,
  imageContainerClassName,
  elementInfoTitleClassName
}) => {
  return (
    <div className={containerClassName}>
      {TabSwitchComponent && <TabSwitchComponent />}

      <div className={titleClassName}>{title}</div>
      <div className={categoryContainerClassName}>
        {MyCatalog.getCategory("root")
          .elements.filter((element: any) =>
            element.info.visibility ? element.info.visibility.catalog : true
          )
          .map((element: any, index: number) => {
            return (
              <div
                key={index}
                className={`${elementClassName} ${
                  selectedCategoryName === element.name
                    ? selectedElementClassName
                    : ""
                }`}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  onSelectCatalogItem(element, element.name);
                }}
              >
                <div className={imageContainerClassName}>
                  <img
                    src={element.info.image}
                    width={CategoryImageWidth[element.name] || "40"}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className={elementInfoTitleClassName}>
                  {element.info.title}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
