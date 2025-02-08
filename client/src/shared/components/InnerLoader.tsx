interface ILoadingProps {
  className?: string;
}

export default function InnerLoader({}: ILoadingProps) {
  return (
    <div className="absolute pl-[6.5rem] inset-0 z-10 flex items-center justify-center bg-grey-0/30">
      <span className="loader"></span>
    </div>
  );
}