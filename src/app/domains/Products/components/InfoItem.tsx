export interface InfoItemProps {}

const InfoItem: React.FC<InfoItemProps> = ({ children }) => (
  <th
    scope="col"
    className={`flex items-center w-full md:w-1/${4} p-4 font-normal bg-light-mode dark:bg-dark-mode border border-b-0 border-r-0 md:border-b`}
  >
    {children}
  </th>
);

export default InfoItem;
