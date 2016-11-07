# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :terriblecards,
  ecto_repos: [Terriblecards.Repo]

# Configures the endpoint
config :terriblecards, Terriblecards.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "O/L3CklNvSFSrgXQJU34M830dtPiqW1a3Bbkz693pHutgqQ87rewHJe2c8d1CwrV",
  render_errors: [view: Terriblecards.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Terriblecards.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
