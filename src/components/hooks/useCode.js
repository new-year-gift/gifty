import { useSelector } from "react-redux";

export const useCode = () => {
    const { code } = useSelector((state) => state);
    return { code };
};