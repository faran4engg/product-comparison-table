import { DEFAULT_IMG } from 'app/kernel/constants';
import { FilteredProductsEntity, TableCaption } from 'app/kernel/types';
import { toCamelCase } from 'utils/toCamelCase';

export interface ComparisonTableProps {
  products: FilteredProductsEntity[];
  captions: TableCaption[];
}

const addDefaultSrc = ev => {
  ev.target.src = DEFAULT_IMG;
};

const renderBadges = badges =>
  badges.split('|').map((url, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <img className="w-5 h-5 text-center" key={index} src={url} alt="badges" />
  ));

// @ts-ignore
const ComparisonTable: React.FC<ComparisonTableProps> = ({
  products,
  captions,
}) => {
  const noOfProducts = products.length;

  return (
    <section className="mb-8">
      <table className="w-full mx-auto shadow-2xl max-w-7xl ">
        <thead className="sticky top-0 block">
          <tr className="flex text-left">
            <th
              scope="col"
              className={`hidden w-1/${noOfProducts} p-4 border border-gray-300 dark:border-black  bg-light-mode dark:bg-dark-mode md:block`}
            >
              &nbsp;
            </th>
            {products.map(prod => (
              <th
                key={prod.id}
                scope="col"
                className={`w-1/${noOfProducts} p-4 font-normal text-center border border-gray-300 dark:border-black  bg-light-mode dark:bg-dark-mode`}
              >
                <h4 className="hidden md:block"> {prod.name.split('(')[1]}</h4>
                <h4 className="block md:hidden" style={{ fontSize: '10px' }}>
                  {prod.name.split('(')[1]}
                </h4>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {captions.map(({ featureName, shouldHighlight }) => (
            <tr
              key={featureName}
              className="flex flex-wrap text-sm text-left md:flex-nowrap "
            >
              <th
                scope="col"
                className={`flex items-center w-full md:w-1/${
                  noOfProducts + 1
                }  p-4 font-normal ${
                  shouldHighlight
                    ? 'bg-gray-200 dark:bg-gray-600'
                    : 'bg-light-mode dark:bg-dark-mode'
                }  border border-gray-300 dark:border-black   `}
              >
                {featureName}
              </th>

              {products!.map(prod => (
                <td
                  key={prod.id}
                  className={`flex items-center justify-center w-1/${noOfProducts} md:w-1/${
                    noOfProducts + 1
                  } p-4 border border-gray-300 dark:border-black   ${
                    shouldHighlight
                      ? 'bg-gray-200 dark:bg-gray-600'
                      : 'bg-light-mode dark:bg-dark-mode'
                  }`}
                >
                  {toCamelCase(featureName) === 'badges' ? (
                    <div className="flex flex-col justify-center md:flex-row">
                      {renderBadges(prod[toCamelCase(featureName)])}
                    </div>
                  ) : toCamelCase(featureName) === 'productImage' ? (
                    <img
                      className="w-12 h-12 mx-auto rounded-full"
                      src={prod[toCamelCase(featureName)]}
                      alt="Product"
                      onError={addDefaultSrc}
                    />
                  ) : (
                    prod[toCamelCase(featureName)]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default ComparisonTable;
