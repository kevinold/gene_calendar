defmodule GeneCalendar.Router do
  use GeneCalendar.Web, :router

  pipeline :default do
    plug :accepts, ["html", "json"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/", GeneCalendar do
    pipe_through :default

    get "/", PageController, :index
    get "/calendar", PageController, :calendar
  end
end
