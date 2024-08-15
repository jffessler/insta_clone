import { create } from "zustand";

const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  //used to update number of posts in profile page
  addPost: (post) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: [post.id, ...state.userProfile.posts],
      },
    })),
}));

export default useUserProfileStore;
