import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import SearchFilm from "../SearchFilm";

describe("SearchFilm.spec.js", () => {
  it("test test hàm Searchmove có được gọi khi kymove thay đổi không", async () => {
    const wrapper = shallowMount(SearchFilm, {
      data: {
        keymove: "",
      },
    });
    const spy = vi.spyOn(wrapper.vm, "Searchmove");
    await wrapper.setData({ keymove: "avatar" });

    expect(spy).toHaveBeenCalled();
  });

  it("test hàm thêm phẩn tử mảng mục đích tạo pagination", async () => {
    const wrapper = shallowMount(SearchFilm, {
      data: {
        count: 0,
        total_page: [{ pageid: 1, IsPageChoose: true }],
      },
    });

    await wrapper.setData({
      total_page: [
        { pageid: 1, IsPageChoose: true },
        { pageid: 2, IsPageChoose: false },
      ],
    });

    expect(wrapper.vm.total_page).toStrictEqual([
      { pageid: 1, IsPageChoose: true },
      { pageid: 2, IsPageChoose: false },
    ]);
  });
});
