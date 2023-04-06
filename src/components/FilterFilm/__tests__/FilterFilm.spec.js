import { describe, it, expect } from "vitest";
import { beforeAll, afterEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import FilterFilm from "../FilterFilm.vue";

describe("FilterFilm", () => {
  describe("tesp props", () => {
    it("kiểm tra props ban đầu của movie ", () => {
      const wrapper = shallowMount(FilterFilm, {
        propsData: {
          typemoveid: "28",
          year: "2023",
          rankmove: "popularity.desc",
        },
      });
      expect(wrapper.props("typemoveid")).toBe("28");
      expect(wrapper.props("year")).toBe("2023");
      expect(wrapper.props("rankmove")).toBe("popularity.desc");
    });
  });
});

describe("kiem tran watch", () => {
  let spy;

  beforeAll(() => {
    spy = vi.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockClear();
  });
  it("kiểm tra sự thay đổi của typemoveid,", async () => {
    const wrapper = shallowMount(FilterFilm, {
      propsData: {
        typemoveid: "28",
      },
    });

    await wrapper.setProps({ typemoveid: "29" });

    expect(spy).toHaveBeenCalled();
  });

  it("kiểm tra sự thay đổi của year,", async () => {
    const wrapper = shallowMount(FilterFilm, {
      propsData: {
        year: "2023",
      },
    });

    await wrapper.setProps({ year: "2022" });

    expect(spy).toHaveBeenCalled();
  });
  it("kiểm tra sự thay đổi của rankmove,", async () => {
    const wrapper = shallowMount(FilterFilm, {
      propsData: {
        rankmove: "popularity.desc",
      },
    });

    await wrapper.setProps({ rankmove: "vote_average.desc" });

    expect(spy).toHaveBeenCalled();
  });
});
