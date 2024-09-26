import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  Email: string;
  EmailVerified: boolean;
  FirstName: string;
  LastName: string;
  Id: string;
  token?: string;
  refreshToken?: string
}

const initialState: UserState = {
  Email: '',
  EmailVerified: false,
  FirstName: '',
  LastName: '',
  token: "",
  Id: '',
  refreshToken: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    clearUser: (state) => {
      return initialState;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.Email = action.payload;
    },
    setEmailVerified: (state, action: PayloadAction<boolean>) => {
      state.EmailVerified = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setrefreshToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.FirstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.LastName = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.Id = action.payload;
    },
  },
});

export const { setUser, clearUser, setEmail, setEmailVerified, setFirstName, setLastName, setId } = userSlice.actions;
export default userSlice.reducer;
