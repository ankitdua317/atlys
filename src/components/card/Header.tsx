interface Props {
  functionNumber: number;
}

const Header = ({ functionNumber }: Props) => {
  return (
    <div className="card-header mb-5 text-sm text-[#A5A5A5] font-semibold">
      ::: Function: {functionNumber}
    </div>
  );
};

export default Header;
