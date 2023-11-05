import { renderHook, act } from '@testing-library/react';
import { MovieContext } from '../../routes/context/MovieContext';
import { useForm } from '../useForm';


describe("useForm", () => {
    it("should update form state when onInputChange is called", () => {
        const setForm = jest.fn();
        const form = {
            yearFilter: "",
        };

        const Wrapper = ({ children }) => (
            <MovieContext.Provider value={{ form, setForm }}>
                {children}
            </MovieContext.Provider>
        );

        const { result } = renderHook(() => useForm(), {
            wrapper: Wrapper,
        });

        const inputName = "yearFilter";
        const inputValue = "2023";

        act(() => {
            result.current.onInputChange({ name: inputName, value: inputValue });
        });

        expect(setForm).toHaveBeenCalledWith({
            ...form,
            [inputName]: inputValue,
        });
    });
});
