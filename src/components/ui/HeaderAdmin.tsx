import DropDown from "./DropDown";
interface IListMenu {
  dropdown: any;
}
interface IHeaderAdmin {
  children?: JSX.Element;
  title: string;
  arrayList?: IListMenu[];
}

export default function HeaderAdmin({
  children,
  title,
  arrayList,
}: IHeaderAdmin) {
  return (
    <div>
      <div className="bg-[#262627] pb-[38px] pt-[73px]">
        <div className="max-w-[450px] mx-auto relative">
          <div className="flex justify-center items-center">
            <p className="text-center">{title}</p>
            {arrayList?.map((item, index: any) => (
              <DropDown items={item.dropdown} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[450px] mx-auto">{children}</div>
    </div>
  );
}
