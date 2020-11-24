describe("Creating Mocks", ()=>{
  test("Success case", ()=>{
    const validatorMock = jest.fn(() => {
			return true
		});
  });

  test("Fail case", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
  });
});