use std::fs;
use serde::Deserialize;

#[derive(Deserialize)]
struct CargoToml {
    package: Package,
}

#[derive(Deserialize)]
struct Package {
    version: String,
}

pub struct Version {
    pub major: u8,
    pub minor: u8,
    pub patch: u8,
}

pub fn get_version() -> Result<Version, Box<dyn std::error::Error>> {
    let cargo_toml = fs::read_to_string("Cargo.toml")?;
    let cargo: CargoToml = toml::from_str(&cargo_toml)?;
    let version_parts: Vec<&str> = cargo.package.version.split('.').collect();
    let major = version_parts.get(0).unwrap_or(&"0").parse::<u8>()?;
    let minor = version_parts.get(1).unwrap_or(&"0").parse::<u8>()?;
    let patch = version_parts.get(2).unwrap_or(&"0").parse::<u8>()?;
    Ok(Version { major, minor, patch })
}
